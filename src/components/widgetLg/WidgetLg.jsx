import './WidgetLg.scss'

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={"button " + type}>{type}</button>
  }

  return (
      <div className="widgetLg">
          <h3 className="title">Latest Transactions</h3>
          <table>
            <tr>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
            <tr>
              <td className="name">
                <img src="https://image.winudf.com/v2/image1/YW1vbmd1c2F2YXRhcm1ha2VyLmFtb25ndXMuZHVtdmNvbV9pY29uXzE2MDU0ODg1NTVfMDY3/icon.png?w=&fakeurl=1" className='image'/>
                <span>Recep Çiftçi</span>
              </td>
              <td className="date">2 Jun 2021</td>
              <td className="amount">$122.00</td>
              <td className="status">
                <Button type="Approved"/>
              </td>
            </tr>
            <tr>
              <td className="name">
                <img src="https://image.winudf.com/v2/image1/YW1vbmd1c2F2YXRhcm1ha2VyLmFtb25ndXMuZHVtdmNvbV9pY29uXzE2MDU0ODg1NTVfMDY3/icon.png?w=&fakeurl=1" className='image'/>
                <span>Recep Çiftçi</span>
              </td>
              <td className="date">2 Jun 2021</td>
              <td className="amount">$122.00</td>
              <td className="status">
                <Button type="Declined"/>
              </td>
            </tr>
            <tr>
              <td className="name">
                <img src="https://image.winudf.com/v2/image1/YW1vbmd1c2F2YXRhcm1ha2VyLmFtb25ndXMuZHVtdmNvbV9pY29uXzE2MDU0ODg1NTVfMDY3/icon.png?w=&fakeurl=1" className='image'/>
                <span>Recep Çiftçi</span>
              </td>
              <td className="date">2 Jun 2021</td>
              <td className="amount">$122.00</td>
              <td className="status">
                <Button type="Pending"/>
              </td>
            </tr>
          </table>
      </div>
  )
};

export default WidgetLg;
