{
    users: {
        isAuthd,
        isFetching,
        error,
        authedId,
        [uid]: {
            lastUpdated,
            info: {
                name,
                uid,
                avatar
            }
        }
    },
    modal: {
        duck,
        isOpen
    },
    ducks: {
        isFetching,
        error,
        [duckid]: {
            lastUpdated,
            info: {
                avatar,
                duckId,
                name,
                text,
                timestamp,
                uid
            }
        }
    },
    usersDucks: {
        isFetching,
        error,
        [uid]: {
            lastUpdated,
            duckIds: ['duckid','duckid']
        }
    },
    likeCount: {
        [duckId]: 0
    },
    usersLikes: {
        [duckId]: true
    },
    replies: {
        isFetching,
        error,
        [duckId]: {
            lastUpdated,
            replies: {
                [replyId]: {
                    name,
                    reply,
                    uid,
                    timestamp,
                    avatar,
                    replyId
                }
            }
        }
    },
    listeners: {
        [listenersId]: true
    },
    feed: {
        isFetching,
        error,
        newDucksAvailable,
        duckIdsToAdd: [duckId, duckId],
        duckIds: [duckId, duckId]
    }
}