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
    const { id, first_name, email } = product
    if (!id || !first_name) {
        return
    }
    setData({
      code: id || 'Code',
      name: first_name || 'Name',
      desc: email || 'desc'
    })
  }, [product, setData])
}

export default useProductDetailsData
