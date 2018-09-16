import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { Cell, Section, TableView } from 'react-native-tableview-simple'
import CustomSectionHeader from './customHeader'
import CustomSectionFooter from './customFooter'
import Style from './rateStyle'

class AmazonRates extends Component {
  render() {
    return (
      <TableView>
        <Section
          headerComponent={<CustomSectionHeader />}
          footerComponent={<CustomSectionFooter />}
        >
          <Cell
            cellStyle="RightDetail"
            title="CURRENCY RANGE"
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            detail="RATE"
          />
          <Cell
            cellStyle="RightDetail"
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            title="$101 - $200"
            detail="$213"
          />
          <Cell
            cellStyle="RightDetail"
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            title="$201 - $1000"
            detail="$225"
          />
          <Cell
            cellStyle="RightDetail"
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            title="$201 - $1000"
            detail="$655"
          />
          <Cell
            cellStyle="RightDetail"
            detailTextStyle={Style.tableViewSectionDetailTextStyle}
            titleTextStyle={Style.tableViewSectionTitleTextStyle}
            title="E-CODE"
            detail="$200"
          />
        </Section>
      </TableView>
    )
  }
}

export default AmazonRates
