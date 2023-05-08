#[macro_use] extern crate rocket;


use rocket::fs::{relative, FileServer};
use rocket::serde::{Serialize, Deserialize};

#[get("/world")]
fn world() ->&'static str {
    "Hello World!"
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/",routes![world])
        
}

