import { ref } from 'config/constants'

function saveToDucks (duck) {
  const duckId = ref.child('ducks').push().key //create random key placeholder
  const duckPromise = ref.child(`ducks/${duckId}`).set({...duck, duckId}) //create promise which pushes to this location
  return {
    duckId,
    duckPromise
  }
}

function saveToUsersDucks(duck, duckId) {
  return ref.child(`usersDucks/${duck.uid}/${duckId}`)
  .set({...duck, duckId})
}

function saveLikeCount (duckId) {
  return ref.child(`likeCount/${duckId}`).set(0) //create like count reference and set it to 0
}

export function saveDuck (duck) {
  const { duckId, duckPromise } = saveToDucks(duck) // get random duck id and promise
  return Promise.all([
    duckPromise,
    saveToUsersDucks(duck, duckId),
    saveLikeCount(duckId),
  ]).then(() => ({...duck, duckId}))
}

export function listenToFeed (cb, errorCB ) {
  ref.child('ducks').on('value', (snapshot) => {
    const feed = snapshot.val() || {}
    const sortedIds = Object.keys(feed).sort((a,b) => {
      return feed[b].timestamp = feed[a].timestamp
    })
    cb({feed, sortedIds})
  }, errorCB)
}