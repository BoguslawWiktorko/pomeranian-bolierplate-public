import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { Cwiczenie1MetaData } from './Cwiczenie1/router-data';
import { Cwiczenie2MetaData } from './Cwiczenie2/router-data';
import { Cwiczenie3MetaData } from './Cwiczenie3/router-data';
import { MoreOrLessMetaData } from './MoreOrLess/router-data';
import { MoreOrLessAdvancedMetaData } from './MoreOrLessAdvanced/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { LocalDevAndFetchMetaData } from './LocalDevAndFetch/router-data';
import { blockRouterMetaDataToDoWithServer } from './ToDoWithServer/router-data';
import { FirebaseExampleMetaData } from './FirebaseExample/router-data';
import { MyFormblockRouterMetaData as MyForm } from './MyForm/router-data';
import { blockRouterMetaDataReduxTest } from './ReduxTest/router-data';
import { blockRouterMetaDataReduxCounter } from './ReduxCounter/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  Cwiczenie1MetaData,
  Cwiczenie2MetaData,
  Cwiczenie3MetaData,
  MoreOrLessMetaData,
  MoreOrLessAdvancedMetaData,
  MaterialUIBasicElementsMetaData,
  LocalDevAndFetchMetaData,
  blockRouterMetaDataToDoWithServer,
  FirebaseExampleMetaData,
  MyForm,
  blockRouterMetaDataReduxTest,
  blockRouterMetaDataReduxCounter,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
