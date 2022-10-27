export class AppSettings {
    //DESARROLLO
    public static URL_BASE = 'http://localhost:8080/api/segres_crm';
    //PRODUCCION
    //public static URL_BASE = 'http://195.5546.54:7777/api/v1/';

    public static LISTAR_SOLICITUD_COTIZACION = '/getAllSolicitudCotizacion';
    public static CREATE_SOLICITUD_COTIZACION = '/crearCotizacion';

    public static LISTAR_ESTADO_SOLICITUD = '/getAllEstadoSolicitudList';

    public static LISTAR_USUARIO = '/getAllUsuario';
    public static ELIMINA_EMPLEADO = '/employeeDelete';

    public static LOGIN_USUARIO = '/loginUsuario';
}
