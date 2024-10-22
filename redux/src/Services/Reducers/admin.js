


const initialState = {
    admins: ["Ankur" , "jay" ,"Rohit"],
    admin: null,
  };
  
  const ADMIN_ACTION_ONE = 'ADMIN_ACTION_ONE';
  const ADMIN_ACTION_TWO = 'ADMIN_ACTION_TWO';
  
  const adminReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMIN_ACTION_ONE:
        return state; 
      case ADMIN_ACTION_TWO:
        return state; 
      default:
        return state;
    }
  };
  
  export default adminReducer;
  