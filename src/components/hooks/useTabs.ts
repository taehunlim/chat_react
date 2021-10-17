import { useState } from 'react';

function useTabs<T> (initialTab: string, allTabs: T) {

    const [currentIdx, setCurrentIdx] = useState(initialTab ? initialTab : 0);

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    };

    const currentTab = allTabs.filter((tab) => tab.props.activeKey === currentIdx);
    return {
        currentItem: currentTab[0].props.activeKey,
        changeItem: setCurrentIdx
    };
};

export default useTabs;
