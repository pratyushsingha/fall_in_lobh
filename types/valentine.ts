export interface ValentineTemplate {
  title: string
  gifs: {
    default: string
    yes: string
  }
  buttons: {
    yes: string
    yesResponse: string
    subtitle?: string
  }
  phrases: string[]
}

