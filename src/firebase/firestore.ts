import firebasedb from './index';
import { getFirestore } from 'firebase/firestore';
const fireStore = getFirestore(firebasedb);
console.log(fireStore);
export default fireStore;
