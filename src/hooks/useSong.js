import { addDoc, collection, getDoc, getDocs, getFirestore, orderBy, query, setDoc, doc, deleteDoc } from "firebase/firestore"

import { firebaseApp } from "../firebase"
import { onMounted, ref } from "vue"

export default function useSong() {
  const dbFireStore = getFirestore(firebaseApp)

  const songsRef = collection(dbFireStore, "songs")
  const songQuery = query(songsRef, orderBy("date", "asc"))

  const palylistRef = collection(dbFireStore, "playlist")
  const palylistQuery = query(palylistRef)

  const songs = ref([])
  const playList = ref([])

  onMounted(() => {
    getAllPlayList()
  })

  function getAllSong() {
    getDocs(songQuery).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      songs.value = result
    })
  }

  function getAllPlayList() {
    getDocs(palylistQuery).then((querySnapshot) => {
      const result = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      playList.value = result
    })
  }

  async function updateToPlayList(data) {
    try {
      const docRef = doc(dbFireStore, "playlist", data.id)
      const docSnapshot = await getDoc(docRef)

      if (docSnapshot.exists()) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, {
          ...data,
        })
      }
      getAllPlayList()

      return "done"
    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

  async function addSong() {
    //for seed data
    const querySnapshot = await getDocs(songQuery)
    if (querySnapshot.empty) {
      for (let i = 0; i <= 10; i++) {
        await addDoc(songsRef, {
          status: true,
          title: "Cy Ganderton",
          album: "Littel, Schaden and Vandervort",
          date: Date.now(),
          time: 3.19,
        })
      }
    }
    getAllSong()
  }

  return { addSong, songs, getAllSong, updateToPlayList, getAllPlayList, playList }
}
