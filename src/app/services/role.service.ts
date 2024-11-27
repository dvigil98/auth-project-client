import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Response } from '../core/utils/response';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl: string = 'http://localhost:8000/api';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getRoles(): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}/roles`, { headers: this.getHeaders() });
  }

  saveRole(role: Role): Observable<Response> {
    return this.http.post<Response>(`${this.baseUrl}/roles`, role, { headers: this.getHeaders() });
  }

  getRole(id: number): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}/roles/${id}`, { headers: this.getHeaders() });
  }

  updateRole(role: Role, id: number): Observable<Response> {
    return this.http.put<Response>(`${this.baseUrl}/roles/${id}`, role, { headers: this.getHeaders() });
  }

  deleteRole(id: number): Observable<Response> {
    return this.http.delete<Response>(`${this.baseUrl}/roles/${id}`, { headers: this.getHeaders() });
  }

  searchRoles(critery: string, value: string): Observable<Response> {
    return this.http.get<Response>(`${this.baseUrl}/roles/${critery}/${value}/search`, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {

    let user = JSON.parse(this.authService.getUser());

    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${user.access_token}`,
    });
  }
}