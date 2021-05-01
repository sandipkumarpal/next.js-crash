import { useEffect, useState } from 'react'
import TagManager from 'react-gtm-module'
import deepEqual from 'deep-equal'
import usePrevious from '../common/usePrevious'
import { GTM_DATA_PUSH_EVENT } from '../../config/gmt'

const useDataLayer = (key, event = GTM_DATA_PUSH_EVENT) => {
  const [data, setData] = useState()
  const previousData = usePrevious(data)

  useEffect(() => {
    if (!key || !data || deepEqual(data, previousData)) {
      return
    }
    const dataLayer = {
      [key]: data,
      event
    }
    TagManager.dataLayer({
      dataLayer
    })
  }, [data, key, event, previousData])

  return setData
}

export default useDataLayer
