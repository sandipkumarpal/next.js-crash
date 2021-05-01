import { useEffect } from 'react'
// import { isEmpty } from '@bms/bigtix-web-common/es/helpers/misc/general'
import useDataLayer from '../GMT/useDataLayer'
import { GTM_PRODUCT_DETAILS_KEY } from '../../config/gmt'

const useProductDetailsData = (product={}) => {
  const setData = useDataLayer(GTM_PRODUCT_DETAILS_KEY)

  useEffect(() => {
    // if (isEmpty(product)) {
    //   return
    // }
    const { code, name, content: { description } = {} } = product
    if (!code || !name) {
        return
    }
    setData({
      code: code || 'Code',
      name: name || 'Name',
      desc: description || 'desc'
    })
  }, [product, setData])
}

export default useProductDetailsData
