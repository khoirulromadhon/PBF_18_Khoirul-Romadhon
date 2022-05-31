import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('mahasiswa');
    this.state = {
      nim:'',
      nama: '',
      jurusan: '',
      prodi: '',
      angkatan: '',
      status: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nim, nama, jurusan, prodi, status, angkatan } = this.state;

    this.ref.add({
      nim,
      nama,
      jurusan,
      prodi,
      angkatan,
      status
    }).then((docRef) => {
      this.setState({
        nim:'',
        nama: '',
        jurusan: '',
        prodi: '',
        angkatan: '',
        status:''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { nim, nama, jurusan, prodi, angkatan, status } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Add Mahasiswa
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Mahasiswa List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="nama">Nim:</label>
                <input type="text" class="form-control" name="nim" value={nim} onChange={this.onChange} placeholder="Nim" />
              </div>

              <div class="form-group">
                <label for="nama">Nama:</label>
                <input type="text" class="form-control" name="nama" value={nama} onChange={this.onChange} placeholder="Nama" />
              </div>

              <div class="form-group">
                <label for="jurusan">Jurusan:</label>
                <input type="text" class="form-control" name="jurusan" value={jurusan} onChange={this.onChange} placeholder="Jurusan" />
              </div>
              
              <div class="form-group">
                <label for="prodi">Prodi:</label>
                <input type="text" class="form-control" name="prodi" value={prodi} onChange={this.onChange} placeholder="Prodi" />
              </div>

              <div class="form-group">
                <label for="prodi">Angkatan:</label>
                <input type="number" class="form-control" name="angkatan" value={angkatan} onChange={this.onChange} placeholder="Angkatan" />
              </div>

              <div class="form-group">
                <label for="status">Status:</label>
                <input type="text" class="form-control" name="status" value={status} onChange={this.onChange} placeholder="Status" />
              </div>

              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
