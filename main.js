
  
  function valitseVuosi() {
    var vuosi= document.getElementById("Kalat").value;
   
    if(vuosi=="hauki98"){

    var arvot= [
      {
        "1998": 88,
        "ELY-keskus": "YHTEENSÄ (ELY-keskus)",
        "Laji": "Hauki"
      },
      {
        "1998": 0,
        "ELY-keskus": "Uusimaa",
        "Laji": "Hauki"
      },
      {
        "1998": 2,
        "ELY-keskus": "Varsinais-Suomi",
        "Laji": "Hauki"
      },
      {
        "1998": 7,
        "ELY-keskus": "Häme",
        "Laji": "Hauki"
      },
      {
        "1998": 1,
        "ELY-keskus": "Kaakkois-Suomi",
        "Laji": "Hauki"
      },
      {
        "1998": 6,
        "ELY-keskus": "Etelä-Savo",
        "Laji": "Hauki"
      },
      {
        "1998": 8,
        "ELY-keskus": "Pohjois-Karjala",
        "Laji": "Hauki"
      },
      {
        "1998": 12,
        "ELY-keskus": "Pohjois-Savo",
        "Laji": "Hauki"
      },
      {
        "1998": 5,
        "ELY-keskus": "Keski-Suomi",
        "Laji": "Hauki"
      },
      {
        "1998": 2,
        "ELY-keskus": "Pohjanmaa",
        "Laji": "Hauki"
      },
      {
        "1998": 26,
        "ELY-keskus": "Kainuu",
        "Laji": "Hauki"
      },
      {
        "1998": 19,
        "ELY-keskus": "Lappi",
        "Laji": "Hauki"
      },
      {
        "1998": "",
        "ELY-keskus": "\u0000",
        "Laji": ""
      }
    ]
  }
  else if(vuosi=="hauki00"){
      var arvot = [
        {
          "2000": 127,
          "ELY-keskus": "YHTEENSÄ (ELY-keskus)",
          "Laji": "Hauki"
        },
        {
          "2000": 0,
          "ELY-keskus": "Uusimaa",
          "Laji": "Hauki"
        },
        {
          "2000": 10,
          "ELY-keskus": "Varsinais-Suomi",
          "Laji": "Hauki"
        },
        {
          "2000": 6,
          "ELY-keskus": "Häme",
          "Laji": "Hauki"
        },
        {
          "2000": 1,
          "ELY-keskus": "Kaakkois-Suomi",
          "Laji": "Hauki"
        },
        {
          "2000": 7,
          "ELY-keskus": "Etelä-Savo",
          "Laji": "Hauki"
        },
        {
          "2000": 10,
          "ELY-keskus": "Pohjois-Karjala",
          "Laji": "Hauki"
        },
        {
          "2000": 10,
          "ELY-keskus": "Pohjois-Savo",
          "Laji": "Hauki"
        },
        {
          "2000": 8,
          "ELY-keskus": "Keski-Suomi",
          "Laji": "Hauki"
        },
        {
          "2000": 3,
          "ELY-keskus": "Pohjanmaa",
          "Laji": "Hauki"
        },
        {
          "2000": 27,
          "ELY-keskus": "Kainuu",
          "Laji": "Hauki"
        },
        {
          "2000": 46,
          "ELY-keskus": "Lappi",
          "Laji": "Hauki"
        },
        {
          "2000": "",
          "ELY-keskus": "\u0000",
          "Laji": ""
        }
      ]
    }

    // Luetaan arvot taulukon otsikoiksi 
    // ('2000', 'ELY-keskus', 'Laji')
    var col = [];
    for (var i = 0; i < arvot.length; i++) {
        for (var key in arvot[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // Luodaan dynaaminen taulukko.
    var table = document.createElement("table");

    // Luodaan HTML taulukon otsikkorivi yllä luetuista arvoista.

    var tr = table.insertRow(-1);                   // Taulukon rivi.

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // Rivin otsikko.
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // Lisätään JSON tiedot taulukkoon riveiksi.
    for (var i = 0; i < arvot.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = arvot[i][col[j]];
        }
    }

    // Lisätään juuri luotu taulukko, jossa JSON data, HTML elementtiin.
    var divContainer = document.getElementById("kalataulukko");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}
