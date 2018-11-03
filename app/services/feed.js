class Feed {
  static index = () => {
    return {
      type: 'LOAD_FEED',
      payload: {
        request: {
          url: '/feed'
        }
      }
    }
  }
}

export default Feed;
