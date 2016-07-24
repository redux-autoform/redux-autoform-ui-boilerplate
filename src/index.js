import MaterialUIFactory from './factory/CustomUIFactory';
import TypeConfig from './factory/constants/TypeConstants'

export const EditComponentFactory = new MaterialUIFactory(TypeConfig.edit);
export const DetailsComponentFactory = new MaterialUIFactory(TypeConfig.details);