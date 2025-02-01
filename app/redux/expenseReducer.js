const initialState = {
    transactions: [],
  };
  
  const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EXPENSE':
        return { ...state, transactions: [...state.transactions, action.payload] };
      case 'DELETE_EXPENSE':
        return { 
          ...state, 
          transactions: state.transactions.filter(tx => tx.id !== action.payload) 
        };
      default:
        return state;
    }
  };
  
  export default expenseReducer;
  