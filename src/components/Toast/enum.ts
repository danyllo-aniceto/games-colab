export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface IMessageAlert {
  message: string
  type: ToastType
}
