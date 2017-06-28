import React, { PropTypes } from 'react'
import { WebView } from 'react-native'

import Config from '../Config'

// Component that displays the OAuth login page and saves
// the resulting access token and instance URL to the provided onSuccess hook.
const Login = ({onSuccess}) => {

  let doOnLoadStart = (state) => {

    let startsWithRedirect = state.nativeEvent.url.startsWith(Config.oauthRedirect)
    let accessIndex = state.nativeEvent.url.indexOf('access_token')

    if (startsWithRedirect && accessIndex >= 0) {

      // If the browser is being redirected to the OAuth redirect URL,
      // then extract the access token and instance URL from the query
      // string and signal that login has succeeded.
      let decodedUrl = decodeURIComponent(state.nativeEvent.url)
      let getParam = (source, item) => {
        let itemIndex = source.indexOf(item)
        if (itemIndex >= 0) {
          let indexPlus = source.substr(itemIndex)
          let ampIndex = indexPlus.indexOf('&')
          let startIndex = item.length + 1
          let strLength = ampIndex - startIndex
          let result = indexPlus.substr(startIndex, strLength)
          return result
        } else {
          return ''
        }
      };

      let accessToken = getParam(decodedUrl, 'access_token')
      let instanceUrl = getParam(decodedUrl, 'instance_url')
      onSuccess(accessToken, instanceUrl)
    }
  }

  let uri = Config.loginUrl + 'display=popup&response_type=token'
          + '&client_id=' + encodeURIComponent(Config.consumerKey)
          + '&redirect_uri=' + encodeURIComponent(Config.oauthRedirect)

  return (
      <WebView
        onLoadStart={doOnLoadStart}
        source={{uri}}
        style={{marginTop: 20}} />
  )
}

Login.propTypes = {
  onSuccess: PropTypes.func.isRequired
}

export default Login
