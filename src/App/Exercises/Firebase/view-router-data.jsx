import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { EmptyComponentWithRouting } from './EmptyComponentWithRouting/EmptyComponentWithRouting';

export const blockRouterMetaData = [EmptyComponentWithRouting];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
