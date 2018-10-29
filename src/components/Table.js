import React, { Component } from 'react';
//import fetch from 'fetch';

//const API = 'https://hn.algolia.com/api/v1/search?query=';
//const DEFAULT_QUERY = 'redux';

class Table extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      resp: undefined,
    };
  }

  componentDidMount() {
    //fetch(API + DEFAULT_QUERY)
    /*fetch('https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=JHR01', {
      headers: {'Content-Type': 'application/json'}
    })
    .then(resp => console.log(resp))
    .catch(() => console.log('Blocked?'));*/

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://www.e-solat.gov.my/index.php?r=esolatApi/TakwimSolat&period=today&zone=JHR01';
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(data => this.setState({ resp: data }))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  render() {

    const { resp } = this.state;

    /*const resp = {"prayerTime":
                  [{"hijri":"1440-02-20",
                    "date":"29-Okt-2018",
                    "day":"Monday",
                    "imsak":"05:17:00",
                    "fajr":"05:27:00",
                    "syuruk":"06:45:00",
                    "dhuhr":"12:48:00",
                    "asr":"16:07:00",
                    "maghrib":"18:48:00",
                    "isha":"19:59:00"}],
                  "status":"OK!",
                  "serverTime":"2018-10-29 14:41:43",
                  "periodType":"today",
                  "lang":"ms_my",
                  "zone":"JHR01",
                  "bearing":"292&#176; 25&#8242; 40&#8243;"
            };*/
    //console.log(resp['prayerTime']);
    //console.log(resp['prayerTime'][0]['asr']);
    return (
      <h2>Here</h2>
    );
  }
}

export default Table;

/*
{"prayerTime":
  [{"hijri":"1440-02-20",
      "date":"29-Okt-2018",
      "day":"Monday",
      "imsak":"05:17:00",
      "fajr":"05:27:00",
      "syuruk":"06:45:00",
      "dhuhr":"12:48:00",
      "asr":"16:07:00",
      "maghrib":"18:48:00",
      "isha":"19:59:00"}],
    "status":"OK!",
    "serverTime":"2018-10-29 14:41:43",
    "periodType":"today",
    "lang":"ms_my",
    "zone":"JHR01",
    "bearing":"292&#176; 25&#8242; 40&#8243;"
  }
  */
