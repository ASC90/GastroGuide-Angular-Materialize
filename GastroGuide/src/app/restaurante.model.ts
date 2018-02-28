export class Restaurante { 
     
    restaurante?: string; 
    nombre?: string; 
    apellidos?: string; 
    genero?: string; 
    email?: string; 
    password?: string; 
    telefono?: number; 
    localidad?: string; 
    valoracion?: number; 
    tipoCocinaID?: number[]; 
    tipoAmbienteID?: number[]; 
    adresa?: string; 
    tipo?: string[]; 
    imagen?: any; 
    menu?: [ 
        { 
            titol: string, 
            platos: string 
        } 
    ]; 
    opiniones?: [ 
        { 
            imagen: string 
            nombre: string, 
            comentario: string, 
            valoracion: number 
        } 
    ]; 
    promociones?: 
        { 
            promocion: string, 
            descripcion: string 
        }; 
    recetas?: 
        { 
            imagen: string, 
            nombre: string, 
            preparacion: string, 
            ingredientes: string [] 
        } 
};