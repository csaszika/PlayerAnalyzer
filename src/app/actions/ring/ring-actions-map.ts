export enum RingTypes {
  GET_RINGS = 'GET_RINGS',
  RINGS_LOADED = 'RINGS_LOADED'
}

export const RingActionsMap = new Set<string>()
  .add(RingTypes.GET_RINGS) //this action is implemented in an effect, perhaps useless
  .add(RingTypes.RINGS_LOADED);
