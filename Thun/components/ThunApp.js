class ThunApp {
  constructor() {
    super();

    customElements.whenDefined("$t-").then((_) => {
      // tab-item이 정의되었을 때 tab-item들을 초기화/기본 설정으로 만듦
      this.allTabs.forEach((_) => (_.slot = "tab-buttons"));
      this.allTabs.forEach((el, idx) => {
        // 모든 탭의 기본 속성값 추가
        el.setAttribute("aria-disabled", el.disabled);
        el.setAttribute("aria-selected", el.selected);
        el.setAttribute("tabindex", el.selected ? "0" : "-1");
      });
      if (!this.selectedTab) {
        // 선택된 탭이 없으면
        this.tabs[0].click();
      }

      if (this.selectedTab && this.selectedTab.disabled) {
        // 선택된 탭이 있으나 disabled인 경우(마크업 안전장치)

        this.tabs[0].click();
      }

      if (this.selectedTab) {
        // 있는 경우, 해당 탭이 disabled가 아니면 해당 탭이 활성화된 상태로 로드
        this.selectedTab.click();
      }
    });
  }

  listen() {}
}
