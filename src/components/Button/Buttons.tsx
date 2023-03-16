import { Button, ButtonProps } from '@mui/material'

type BtnPrimaryProps = ButtonProps & {
  name?: string
}

export const BtnPrimary = (props: BtnPrimaryProps) => {
  const { name = 'default', ...rest } = props
  return (
    <Button variant="contained" color="primary" {...rest}>
      {name}
    </Button>
  )
}

export const BtnSecondary = (props: BtnPrimaryProps) => {
  const { name = 'default', ...rest } = props
  return (
    <Button variant="contained" color="secondary" {...rest}>
      {name}
    </Button>
  )
}
