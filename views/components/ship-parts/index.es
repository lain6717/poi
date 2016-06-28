import {connect} from 'react-redux'
//import TopAlert from './topalert'
import {pluck} from './utils'
import {MiniShipRow} from './minishipitem'

const {$, $$, _, React} = window

export const PaneBodyMini = connect(() => {
    const thisFleetShipIdSelector = makeThisFleetShipsIdSelector()
    return (state, props) => ({
      shipsId: thisFleetShipIdSelector(state, props)
    })
  }
)(({fleetId, shipsId}) =>
  <div>
    <div className={"ship-details-mini"}>
    {
      (shipsId || []).map((shipId, i) =>
        <MiniShipRow
          key={shipId}
          fleetId={fleetId}
          shipId={shipId}
          shipIndex={i}
          />
      )
    }
    </div>
  </div>
)
