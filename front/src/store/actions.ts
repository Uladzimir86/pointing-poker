//constants for actions
export const CREATE_ISSUE = 'CREATE_ISSUE'
export const EDIT_ISSUE = 'EDIT_ISSUE'
export const DELETE_ISSUE = 'DELETE_ISSUE'

export const TOGGLE_MODAL_WINDOW = 'TOGGLE_MODAL_WINDOW'

//type for actions

export type ActionToggleModalWindow = {
  type: typeof TOGGLE_MODAL_WINDOW
  payload: boolean
}

//Actions

export const toggleModalWindow = (
  status: boolean
): ActionToggleModalWindow => ({ type: TOGGLE_MODAL_WINDOW, payload: status })
