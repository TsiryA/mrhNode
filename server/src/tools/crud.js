import mongodb from 'mongodb';
import db from './db_logic.js';
import es6Promise from 'es6-promise';

const Promise = es6Promise.Promise;
const ObjectID = mongodb.ObjectID;

const operations = {}

// ====================== CREATE =========================== //
operations.create = {};
// collection
create.collection = (collectionName, data) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).save(data, (err, res) => {
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    });
  });
}

// document
create.collection = (collectionName, data) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).insert(data, (err, res) => {
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    });
  });
}

// ===================== READ ============================= //
operations.read = {}
// all element in collection
read.all = collectionName => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).find().toArray((err, res) => {
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    });
  });
}

// elements
read.elements = (collectionName, eltSpec) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).find(eltSpec).toArray((err, res) => {
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    });
  });
}
// ===================== UPDATE ============================ //
operations.update = {}
// overwritting data
update.overwrite = (collectionName, eltSpec, eltUpdate) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).update(eltSpec, eltUpdate, (err, res) => {
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    });
  });
}

// update data
update.updates = (collectionName, eltSpec, eltUpdate) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).update(eltSpec, {
        $set: eltUpdate
      }, (err, res) => {
        if(err){
          reject(err);
        }else{
          resolve(res);
        }
    });
  });
}

// add to set
update.addToSet = (collectionName, eltSpec, eltUpdate) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).update(eltSpec, {
        $addToSet: eltUpdate
      }, (err, res) => {
        if(err){
          reject(err);
        }else{
          resolve(res);
        }
    });
  });
}

// ======================= DELETE =================== //
operations.delete = {}
// document
delete.doc = (collectionName, data) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).remove(data, (err, res) => {
      if(err){
        reject(err);
      }else{
        resolve(res);
      }
    });
  });
}

// key and values
delete.key = (collectionName, eltSpec, eltDelete) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).update(eltSpec, {
        $unset: eltDelete
      }, (err, res) => {
        if(err){
          reject(err);
        }else{
          resolve(res);
        }
    });
  });
}

// array element
delete.arrayElement =(collectionName, arraySpec, eltDelete) => {
  return new Promise( (resolve, reject) => {
    db.collection(collectionName).update(arraySpec, {
        $pull: eltDelete
      }, (err, res) => {
        if(err){
          reject(err);
        }else{
          resolve(res);
        }
    });
  });
}

export default operations;
