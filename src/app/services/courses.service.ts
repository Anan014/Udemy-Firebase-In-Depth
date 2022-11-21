import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CourseService {
    constructor(private db:AngularFirestore){

    }

    loadCoursesByCategory(category:string):Observable<Course[]> {

    }
}
