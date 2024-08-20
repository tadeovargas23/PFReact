// data.js
import { db } from './firebaseConfig';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';

// Fetch all items
export const fetchAllItems = async () => {
  const itemsCollection = collection(db, 'Items');
  const itemsSnapshot = await getDocs(itemsCollection);
  const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return itemsList;
};

// Fetch items by category
export const fetchItemsByCategory = async (category) => {
  const itemsCollection = collection(db, 'Items');
  const q = query(itemsCollection, where('categoryid', '==', category));
  const itemsSnapshot = await getDocs(q);
  const itemsList = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return itemsList;
};

// Fetch item by id
export const fetchItemById = async (id) => {
  const itemDoc = doc(db, 'Items', id);
  const itemSnapshot = await getDoc(itemDoc);
  if (itemSnapshot.exists()) {
    return { id: itemSnapshot.id, ...itemSnapshot.data() };
  } else {
    return null;
  }
};
