





export default class RaDataTable extends HTMLTableElement {

    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    constructor() {
        
                
        super();
                
        // id가 parent인 노드의 모든 자식 노드(NodeList)
        console.log(this.childNodes);

        // id가 parent인 노드의 모든 자식 노드(HTMLCollecton)
        console.log(this.children);

        
        
        //const shadowRoot = this.attachShadow({ mode: 'open' });
        let inline = this.getAttribute("inline"); 
        let rows = this.getAttribute("rows");
        let cols = this.getAttribute("cols");
        
        let gap = this.getAttribute("gap");
        
        this.style.display = !inline ? 'grid' : 'inline-grid';
        this.style.height = '100%';
        //rows="3" >  grid-template-rows : repeat(3, 1fr)
        //rows="100px 200px 300px" > grid-template-rows : 100px 200px 300px
        this.style.gridTemplateRows = rows && !isNaN(rows) ? `repeat(${rows}, 1fr)` : rows;                
        
        //cols="3" >  grid-template-columns : repeat(3, 1fr)
        //cols="100px 200px 300px" > grid-template-columns : 100px 200px 300px        
        this.style.gridTemplateColumns = cols && !isNaN(cols) ? `repeat(${cols}, 1fr)` : cols;        
        
        this.style.gap = gap;
    }

    // 모니터링 할 속성 이름
    static get observedAttributes() {        
        //return ['locale'];        
    }

    // DOM에 추가되었다. 렌더링 등의 처리를 하자.
    connectedCallback() {
       
        
        this.classList.add('ra-comp');
        
       
        // this.childNodes.forEach((node)=>{
        //     node.style='border:1px solid #efefef';
        // });
        
        // console.log(this.dataset.temprows);
        // console.log(this.dataset.tempcols);
        // this.styles = [];
        
        // this.styles.push('display: grid');
        // this.styles.push(`grid-template-columns:${this.dataset.tempcols}`);
        
        // this.style = this.styles.join(';');
        
    }

    // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
    disconnectedCallback() {
        
        
    }

    //속성이 추가/제거/변경되었다.
    attributeChangedCallback(attrName, oldVal, newVal) {
        
        //this[attrName] = newVal;
    }

    // 다른 Document에서 옮겨져 왔음
    adoptedCallback(oldDoc, newDoc) {
                
    }
    
    edit(){
        this.style += 'border:3px solid block;'
    }
    
}

//태그가 클래스를 사용하도록 한다.
customElements.define('ra-datatable', RaDataTable, {extends : 'table'});


