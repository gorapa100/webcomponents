(() => {
  class ThunPivotGrid extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      //this.shadowRoot;

      this.styleText = "";
      this.hostStyle = document.createElement("style");
      this.layout = document.createElement("div");
      this.table = document.createElement("table");
      this.thead = null;
      this.tbody = null;
      this.tfoot = null;

      this.tbodySet = null;

      this.cols = 0;

      this.shadowRoot.append(this.hostStyle);
    }

    connectedCallback() {
      this.style = "position:inline";
      customElements.whenDefined("thun-template").then(() => {
        const temp = this.querySelector("template").content.cloneNode(true);

        if (!temp) return;

        this.thead = temp.querySelector("thead").cloneNode(true);
        this.tbody = temp.querySelector("tbody").cloneNode(true);
        this.tfoot = temp.querySelector("tfoot").cloneNode(true);

        console.log(this.tfoot);

        this.makeLayout();

        if (this.thead) this.setThead();

        if (this.tbody) this.setTbody();

        console.log(this.table);

        //this.shadowRoot.appendChild(this.table);
      });
    }

    setTbody() {
      this.table.appendChild(this.tbody);

      this.styleText += `
			table tbody tr td:first-child{
				background-color: #efefef;
			}

			table tbody td{
				background-color : #fff;
        border : 1px solid gray;
			}`;

      this.hostStyle.textContent = this.styleText;
    }

    setThead() {
      this.table.appendChild(this.thead);

      this.styleText += `
			table thead th{
				background-color : #efefef;        
        white-space: nowrap;        
			}
      
      table th:first-child,
      table td:first-child {
        position: sticky;
        left: 0;
      }      
      
      table thead {				
				position: sticky;
				top: 0;				
				z-index: 1;
			}

      `;

      this.hostStyle.textContent = this.styleText;
    }

    setRootStyle(style) {
      if (!style) {
        this.shadowRoot.append(this.hostStyle);
      }

      //   this.styleText = `
      //         :host{

      //             overflow:auto;
      //         }
      //     `;

      this.hostStyle.textContent = this.styleText;
    }

    makeLayout() {
      this.layout.setAttribute("id", "thun_grid_layout");
      this.layout.appendChild(this.table);

      this.shadowRoot.appendChild(this.layout);

      this.styleText += `
			#thun_grid_layout {
				left:0;
				top:0;
				width:200px;
				height:200px;
				overflow:auto;
			}

			table {
				border : 0;
				margin : 0;
				padding : 0;
				width:500px;
        table-layout: fixed;
				border-spacing:0px 0px;
				border-collapse:collapse;
			}

      table td {
        width:70px;        
        height:35px;
      }
			
	  `;
      this.hostStyle.textContent = this.styleText;
    }
  }

  class ThunTemplate extends HTMLTemplateElement {
    constructor() {
      super();
    }
    connectedCallback() {}
  }

  customElements.define("thun-pivotgrid", ThunPivotGrid);
  customElements.define("thun-template", ThunTemplate, { extends: "template" });
})();
