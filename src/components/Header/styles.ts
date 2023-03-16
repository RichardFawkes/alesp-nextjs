import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      border: '1px solid #262454',
      borderRadius: 3,
      fontSize: 16,
      textTransform: 'uppercase',
      minHeight: 35,
      color: '#fff',
    },
    title: {
      fontSize: 16,
      fontWeight: 600,
      marginBottom: 0,
    },
  }),
)

export default useStyles
