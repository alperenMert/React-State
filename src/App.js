import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input_ara: "Film, müzik, fotoğraf...",
      button_ara: "Ara",
      date: new Date(),
    };
  }

  render() {
    const zaman = this.state.date.toLocaleTimeString();
    const tarih = this.state.date.toLocaleDateString();
    const buton_ara = this.state.button_ara;

    return (
      <div className="App">
        <div style={{ margin: "10px" }}>
          <input type="text" placeholder={this.state.input_ara} />
          <button
            onClick={() => {
              this.setState({ arama_sonucu: "İçerik Bulunamadı" });
            }}
          >
            {buton_ara}
          </button>
          <p> {this.state.arama_sonucu}</p>
          <small>
            {tarih} {zaman}
          </small>
        </div>
      </div>
    );
  }
}
