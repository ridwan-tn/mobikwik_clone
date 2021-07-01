import React,{ Component, useState } from "react";

import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from  '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import sa from '../../assets/save.png'
import wallet from '../../assets/wallet.png'
import Footer from "../../Components/Footer/Footer";

import TextField from '@material-ui/core/TextField';
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  content: {
    display: "block",
    marginLeft: "16em",
    marginTop: "-2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
      marginRight:"1em",
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: "#002447",
    color:"white",
  },
  tabContainer:{
    textAlign:"center",
   alignItems:"center",
    justifyContent :"center",
},

paper:{   
   margin:"1px",
    width:'100%',
    paddingLeft:"25px",
    paddingRight:"50px",
    paddingTop:"25px",
    paddingBottom:"25px",
    textAlign:"center",
   alignItems:"center",
    justifyContent :"center",
    backgroundColor:"#002447",
    borderRadius:"4px",
    [theme.breakpoints.down("md")]:{
     
      width:'100%',
      paddingLeft:"25px",
      paddingRight:"25px",
      paddingTop:"25px",
      paddingBottom:"25px",
    },
  [theme.breakpoints.down("sm")]:{
    
  },
  [theme.breakpoints.down("xs")]:{
    
      
  }

},

paperContainer:{
   backgroundColor:"#002447",
   textAlign:"center",
  alignItems:"center",
   justifyContent :"center",
},
tabs:{
  width:"100%",
  borderRadius:"2px",
  backgroundColor:"#002447",
  color:"white",
  indicator:{
    color:"white"
  },
},
H:{
color:"white",
fontSize:25,
paddingTop:5,
[theme.breakpoints.down("sm")]:{
  fontSize:20,
}
},
button1:{
width:"100px",
height:"50px",
fontSize:"25px",
color:'white',
borderRadius:"10px",
backgroundColor:"rgb(178,178,178)",
[theme.breakpoints.down("md")]:{
  width:"100px",
  height:"30px",
  fontSize:"15px",
  borderRadius:"5px",
},
[theme.breakpoints.down("sm")]:{
  width:"100px",
  height:"35px",
  fontSize:"15px",
  borderRadius:"5px",
},
[theme.breakpoints.down("xs")]:{
  width:"50px",
  height:"35px",
  fontSize:"15px",
  borderRadius:"5px",
}
},
H2:{
  color:"white",
  fontSize:60,
  paddingTop:50,
  [theme.breakpoints.down("sm")]:{
    fontSize:10,
  }
  },
paperContainer:{
  alignItems:"center",
  justifyContent:"center",
  width:'100%',
  textAlign:"center",

   [theme.breakpoints.down("sm")]:{
   textAlign:"center",
   paddingLeft:"1.5em",
   paddingRight:"1.5em",
   },
   [theme.breakpoints.down("xs")]:{
   textAlign:"center",
   paddingLeft:"1em",
   paddingRight:"1em"
   }
 },
tabpanel1:{
 
  backgroundColor:"white",
  color:"black",
  alignItems:"center",
  justifyContent :"center",
  borderRadius:"5px",
  width:"100%",
  height:"",
  

}
}));
const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '',
    },
  })(Tabs);
  const AntTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color:'#FFFFF',
      minWidth: 72,
      fontWeight: 20,
     
      
      '&:hover': {
        color: '#FFFFFF',
        opacity: 1,
      },
      '&$selected': {
        color: '#FFFFFF',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&:focus': {
        color: '#FFFFFF',
      },
    },
    
}))((props) => <Tab disableRipple {...props} />);
const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  style: { width: '7rem', height: '2rem' },
  borderColor: 'text.primary',
};
export default function Wallet() {
  const [value, setValue] = React.useState(0);
  const[name,setName]=useState("Online prepaid mobile recharge");
  const preventDefault = (event) => event.preventDefault();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Grid container >
      
      <Grid item container>
                 <Paper  className={classes.paper}>
                   <Grid item container>
                     <Grid item md={6}  style={{textAlign:"left"}}>
                       <Typography variant="h6" className={classes.H} > Money Transfer</Typography>
                     </Grid>
                     <Grid item md={6} xs={6} style={{float:"right"}}>
                     <Typography variant="body2" style={{color:"white",marginTop:"2em"}}>
                     <Link href="#" onClick={preventDefault}>
                             How it works ?
                     </Link></Typography>

</Grid>
<Tabs className={classes.tabs} aria-label="simple tabs example"
        value={value}
        onChange={handleChange}
        variant="scrollable"
        marginLeft="0px"
  
        scrollButtons="on"
        indicatorColor="primary"
        textColor="white"
        fontSize="1%"
        backgroundColor="rgb(0,36,71)"
      
        aria-label="scrollable force tabs example"
      >
         <AntTab   label="Sent To Wallet" icon={<Avatar style={{color:"rgb(38,157,228)",backgroundColor:"rgb(233,232,258)",width:"35px",height:"35px"}}  alt="test avatar" src={sa}></Avatar>} {...a11yProps(0)} 
         style={{color:"white",fontSize:"10px"}}/>
           
           
       <AntTab  label="Sent To Bank" icon={<Avatar style={{backgroundColor:"white",width:"35px",height:"35px",color:"blue"}} 
       alt="test avatar" src={wallet}/>} {...a11yProps(1)}  style={{color:"white",fontSize:"10px"}} 
       />
       </Tabs>
       <br/>
      
  <br/>{/*
*/}
                
                  
          
  </Grid>
  <TabPanel justify="center" value={value} className={classes.tabpanel1} index={0}>{/*MOBILE*/}
    <Grid item container  spacing={2}>
    <Grid item md={5}style={{textAlign:"left"}}>
    <Typography style={{fontSize:"10px",padding:10}}> Mobile Number</Typography>
    <TextField id="outlined-basic"  placeholder="Name Of Bank Account" variant="outlined" rowsMax="20" style={{width:"100%"}}/>&nbsp;&nbsp;
    </Grid>
    <Grid item md={5} style={{textAlign:'left'}}>
    <Typography style={{fontSize:"10px",padding:10}}>Amount</Typography>
    <TextField id="outlined-basic" placeholder="₹  Enter Amount" variant="outlined" style={{width:"100%"}}/> 

    </Grid>

    <Grid item md={1}>
    <Typography style={{fontSize:"10px",color:"white",padding:10}}>Amount</Typography>
    <button style={{backgroundColor:"rgb(178,178,178)",width:"100px",height:"60px",borderRadius:"10px",
    color:"white",fontSize:"25px"}}>Go</button>
      </Grid>
        </Grid>
       
        </TabPanel>
        <TabPanel value={value} className={classes.tabpanel1} index={1}>{/*MOBILE*/}
    <Grid item container>
    <Grid item container  justify="center" spacing={1} >
    <Grid item md={3}  style={{textAlign:"left"}}>
     <Typography style={{fontSize:"10px",padding:10}}>Beneficiary Name</Typography>
    
    <TextField id="outlined-basic"  placeholder="Name On Bank Account" variant="outlined"  />
    </Grid>
    <Grid item md={3}  style={{textAlign:"left"}}>
    

   <Typography  style={{fontSize:"10px",padding:10}}> Account Number</Typography>
    
    <TextField id="outlined-basic" placeholder="Account Number" variant="outlined" /> 

    </Grid>
    <Grid item  md={2} style={{textAlign:"left"}}>
     <Typography style={{fontSize:"10px",padding:10}}>IFSC Code</Typography>
  
    <TextField id="outlined-basic" label="select circle"placeholder="IFSC Code" variant="outlined" />     
    </Grid>
    <Grid item  md={3}style={{textAlign:"left"}}>
        <Typography style={{fontSize:"10px",padding:10}}>Amount</Typography> 
      
        <TextField id="outlined-basic" label=" ₹    Amount"placeholder="  ₹  Amount" variant="outlined" /> 
    </Grid>
    <Grid item md={1} >
      <Typography style={{color:"white",fontSize:"25px"}}>Sonet</Typography>
      <button style={{backgroundColor:"rgb(178,178,178)",width:"100px",height:"60px",borderRadius:"10px",
    color:"white",fontSize:"25px"}}>Go</button>
    </Grid>
   
      </Grid>
          </Grid>
        </TabPanel>
       </Paper>  
      </Grid>
      <br/>
      <br/>
     
  </Grid>
  
   
    </div>
  );
}
