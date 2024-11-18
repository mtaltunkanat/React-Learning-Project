export default function Reducer(state, action) {
    switch (action.type) {
    case 'LOGIN':
        localStorage.setItem('user', JSON.stringify(action.payload))
        return {
            ...state,
            user: action.payload
        }

        case 'LOGOUT':
            localStorage.removeItem('user')
            return{
                ...state,
                user: false
            }
    }
   }