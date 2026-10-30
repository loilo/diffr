export type WorkerMessage =
  | {
      type: 'encode'
      id: string
      payload: any
    }
  | {
      type: 'decode'
      id: string
      payload: string
    }

export type EncodingWorkerResponse = {
  type: 'encoded'
  payload: string
  id: string
}

export type DecodingWorkerResponse<T = any> = {
  type: 'decoded'
  payload: T
  id: string
}

export function ensureRecord(
  message: unknown,
): asserts message is Record<string, unknown> {
  if (typeof message !== 'object' || message === null) {
    throw new Error('Invalid message')
  }
}

export function validateMessage(
  message: unknown,
): asserts message is WorkerMessage {
  ensureRecord(message)

  if (typeof message.id !== 'string') {
    throw new Error('Invalid message id')
  }

  switch (message.type) {
    case 'encode':
      if (typeof message.payload !== 'object') {
        throw new Error('Invalid message payload')
      }
      break

    case 'decode':
      if (typeof message.payload !== 'string') {
        throw new Error('Invalid message payload')
      }
      break

    default:
      throw new Error('Invalid message type')
  }
}
