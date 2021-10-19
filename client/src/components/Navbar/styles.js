import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 2,
    margin: '0 0 30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    background: "#0484cf",
  },
  heading: {
    flex:1, 
    color: '#ffffff',
    textAlign:'left',
    paddingLeft: '10px', 
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px'
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    paddingRight:'10px'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));