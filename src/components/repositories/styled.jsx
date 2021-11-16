import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const WrapperTabs = styled(Tabs)`
  font-size: 1rem;
  width: 100%;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin-top: 16px;
  color: #ccc;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border: 2px solid #c1006a;
  box-shadow: 5px 0 0 0 rgba(193, 0, 106, 0.5);
  padding: 16px;
  user-select: none;
  cursor: pointer;
  background-color: #150022;
  margin: 8px 0 0 5px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: none;
    z-index: 1;
  }
`;

WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 2px solid #c1006a;
  box-shadow: 5px 0 0 0 rgba(193, 0, 106, 0.5);
  display: none;
  margin: -6px 10px 10px 0;

  &.is-selected {
    display: block;
  }
`;

WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  margin: 8px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  flex-wrap: wrap;
`;
