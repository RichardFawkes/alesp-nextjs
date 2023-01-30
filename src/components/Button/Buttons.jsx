import Button from '@material-ui/core/Button';

export const BtnPrimary = ({ name = 'default' }) => {
  return (
    <Button variant="contained" color="primary">
      {name}
    </Button>
  );
};

export const BtnSecondary = ({ name = 'default' }) => {
  return (
    <Button variant="contained" color="Secondary">
      {name}
    </Button>
  );
};
