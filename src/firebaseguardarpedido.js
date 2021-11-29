
import firebase from 'firebase/compat/app'
import "firebase/compat/firestore"
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)

let db = firebaseApp.firestore()

const guardarPedidosfs = async ( pedidoObj ) => 
await 
db.collection('Pedidos').doc().set(
        pedidoObj
)
.then((response) => {
        return response;
})
.catch((error) => {
        console.error("Error writing document: ", error);
});

export default guardarPedidosfs; 
