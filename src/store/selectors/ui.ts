import { State } from '..';

export const getLoadingState =
  (actionType: string) =>
  ({ ui }: State) =>
    ui.action === actionType ? ui.isLoading : false;
