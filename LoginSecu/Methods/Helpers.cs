﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoginSecu.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginSecu.Methods
{
    public static class Helpers
    {
        static EST39Context _context = new EST39Context();
        static List<AlumnadoGnl> alumnadoList = new List<AlumnadoGnl>();
        private static List<InfoReportesGnl> reportesList = new List<InfoReportesGnl>();

        internal static IEnumerable<AlumnadoGnl> GetAlumnosList()
        {
            var alumnos = _context.Alumnado.ToList();
            var alumnadoMapping = Mapping(alumnos);
            return alumnadoMapping;
        }

        internal static List<AlumnadoGnl> GetAlumno(int id)
        {
            var alumno = _context.Alumnado.Where(x => x.Id == id).ToList();
            if (alumno is null)
                return null;
            var alumnoMapping = MappingAlumno(alumno);
            return alumnoMapping;
        }

        internal static bool SaveAlumno(AlumnadoGnl alumno)
        {
            try
            {
                var alumnoDB = mappingAlumnoDB(alumno);
                _context.Alumnado.Add(alumnoDB);
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        internal static List<InfoReportesGnl> GetReporteId(int id)
        {
            List<InfoReportes> reporte = _context.InfoReportes.Where(x => x.IdAlumno == id).ToList();
            if (reporte is null)
                return null;
            var reporteMapping = MappingReporteId(reporte);
            return reporteMapping;
        }

        internal static bool DeleteReportId(int id)
        {
            var alumno = _context.InfoReportes.Where(x => x.Id == id).FirstOrDefault();
            if (alumno is null)
                return false;
            _context.Entry(alumno).State = EntityState.Deleted;
            _context.SaveChanges();
            return true;
        }

        internal static bool SaveReport(InfoReportesGnl infoReportes)
        {
            try
            {
                var reporteDB = mappingReportDB(infoReportes);
                _context.InfoReportes.Add(reporteDB);
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        private static InfoReportes mappingReportDB(InfoReportesGnl infoReportes)
        {
            InfoReportes repor = new InfoReportes()
            {
                IdAlumno = infoReportes.IdAlumno,
                CreationDate = infoReportes.CreationDate,
                Description = infoReportes.Description ?? string.Empty,
                IdReporte = getTypeReport(infoReportes.NombreReporte),
            };
            return repor;
        }
        private static int getTypeReport(string nombreReporte)
        {
            var nombre = _context.Reportes.Where(x => x.TipoDeReporte.ToUpper() == nombreReporte.ToUpper()).Select(x => x.Id).FirstOrDefault();
            return nombre;
        }

        private static List<InfoReportesGnl> MappingReporteId(List<InfoReportes> reportes)
        {

            var listReportes = new List<InfoReportesGnl>();

            foreach (var reporte in reportes)
            {
                InfoReportesGnl reporteGnl = new InfoReportesGnl()
                {
                    Id = reporte.Id,
                    IdAlumno = reporte.IdAlumno,
                    IdReporte = reporte.IdReporte,
                    Description = reporte.Description ?? string.Empty,
                    CreationDate = reporte.CreationDate,
                    TotalDays = reporte.TotalDays,
                    NombreReporte = GetNombreReporte(reporte.Id) ?? string.Empty
                };
                listReportes.Add(reporteGnl);
            }
            return listReportes;
        }


        internal static IEnumerable<InfoReportesGnl> GetReportesList()
        {
            var reportes = _context.InfoReportes.ToList();
            var reportesMapping = Mapping(reportes);
            return reportesMapping;
        }

        private static IEnumerable<InfoReportesGnl> Mapping(List<InfoReportes> reportes)
        {
            foreach (var reporte in reportes)
            {
                InfoReportesGnl repos = new InfoReportesGnl()
                {
                    Id = reporte.Id,
                    IdAlumno = reporte.IdAlumno,
                    Description = reporte.Description,
                    CreationDate = reporte.CreationDate,
                    NombreReporte = GetNombreReporte(reporte.IdReporte),
                    IdReporte = reporte.IdReporte,
                    TotalDays = reporte.TotalDays
                };
                reportesList.Add(repos);
            }
            return reportesList;
        }

        private static string GetNombreReporte(int idReporte)
        {
            return _context.Reportes.Where(x => x.Id == idReporte).Select(x => x.TipoDeReporte).FirstOrDefault();
            //var nombre = idReporte.ToString() == "1" ? "Citatorio"
            //    : idReporte.ToString() == "2" ? "Reporte"
            //        : idReporte.ToString() == "3" ? "Justificante"
            //           : string.Empty;
            //return nombre;
        }



        internal static bool DeleteId(int id)
        {
            var alumno = _context.Alumnado.Where(x => x.Id == id).FirstOrDefault();
            if (alumno is null)
                return false;
            _context.Entry(alumno).State = EntityState.Deleted;
            _context.SaveChanges();
            return true;
        }

        internal static bool UpdateAlumno(int id, AlumnadoGnl alumno)
        {
            try
            {

                var alumnoDB = mappingAlumnoDB(alumno);


                _context.Entry(alumnoDB).State = EntityState.Modified;
                _context.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;

            }
        }

        private static List<AlumnadoGnl> Mapping(List<Alumnado> alumnos)
        {
            alumnadoList.Clear();

            foreach (var alumno in alumnos)
            {
                AlumnadoGnl alum = new AlumnadoGnl()
                {
                    Id = alumno.Id,
                    Nombre = alumno.Nombre,
                    ApellidoPaterno = alumno.ApellidoPaterno,
                    ApellidoMaterno = alumno.ApellidoMaterno,
                    FechaDeIngreso = alumno.FechaDeIngreso,
                    Taller = GetTaller(alumno.Taller),
                    Status = GetStatus(alumno.Status),
                    Grado = alumno.Grado,
                    Grupo = GetGrupo(alumno.Grupo),
                    IdAlumno = alumno.IdAlumno,
                    Mano = GetManoDescription(alumno.IdMano),
                    Domicilio = alumno.Domicilio,
                    NombrePadreTutor = alumno.NombrePadreTutor,
                    Telefono = alumno.Telefono
                };
                alumnadoList.Add(alum);
            }
            return alumnadoList;
        }

        private static string GetManoDescription(int? id)
        {

            var description = id == null ? "No definido"
                : _context.Mano.Where(x => x.Id == id).Select(x => x.Descripcion).FirstOrDefault();
            return description.Trim();
        }

        private static Alumnado mappingAlumnoDB(AlumnadoGnl alumno)
        {
            Alumnado al = new Alumnado()
            {
                Id = alumno.Id != null ? alumno.Id : 0,
                Nombre = alumno.Nombre,
                ApellidoPaterno = alumno.ApellidoPaterno,
                ApellidoMaterno = alumno.ApellidoMaterno,
                FechaDeIngreso = alumno.FechaDeIngreso,
                Taller = alumno.Taller != null ? GetTallerDB(alumno.Taller) : 5, // No definido
                Status = alumno.Status != null ? GetStatusDB(alumno.Status) : 4, // No definido
                Grado = alumno.Grado != null ? alumno.Grado : 4, //No definido pero solo tendra 4
                Grupo = alumno.Grupo != null ? GetGrupoDB(alumno.Grupo) : 7, //No definido       
                IdAlumno = alumno.IdAlumno != null ? alumno.IdAlumno : 0, //No definido
                IdMano = alumno.Mano != null ? getIdMano(alumno.Mano) : 4, //No definido
                Domicilio = alumno.Domicilio,
                NombrePadreTutor = alumno.NombrePadreTutor,
                Telefono = alumno.Telefono ?? string.Empty
            };

            return al;
        }

        private static int getIdMano(string mano)
        {
            var idMano = _context.Mano.Where(x => x.Descripcion.ToUpper() == mano.ToUpper()).Select(x => x.Id)
                .FirstOrDefault();

            return idMano;
        }

        private static List<AlumnadoGnl> MappingAlumno(List<Alumnado> alumnos)
        {
            List<AlumnadoGnl> alumnoListTemp = new List<AlumnadoGnl>();
            foreach (var alumno in alumnos)
            {
                AlumnadoGnl alum = new AlumnadoGnl()
                {
                    Id = alumno.Id,
                    Nombre = alumno.Nombre,
                    ApellidoPaterno = alumno.ApellidoPaterno,
                    ApellidoMaterno = alumno.ApellidoMaterno,
                    FechaDeIngreso = alumno.FechaDeIngreso,
                    Taller = GetTaller(alumno.Taller),
                    Status = GetStatus(alumno.Status),
                    Grado = alumno.Grado,
                    Grupo = GetGrupo(alumno.Grupo),
                    Mano = GetManoDescription(alumno.Id),
                    Domicilio = alumno.Domicilio,
                    NombrePadreTutor = alumno.NombrePadreTutor
                };
                alumnoListTemp.Add(alum);
            }

            return alumnoListTemp;
        }

        private static int GetReportesDB(string reportes)
        {
            return _context.Reportes.Where(x => x.TipoDeReporte == reportes).Select(x => x.Id).FirstOrDefault();
        }

        private static int GetGrupoDB(string grupo)
        {
            return _context.GrupoAlumno.Where(x => x.Descripcion == grupo).Select(x => x.Id).FirstOrDefault();
        }

        private static int GetStatusDB(string status)
        {
            return _context.StatusAlumno.Where(x => x.Descripcion == status).Select(x => x.Id).FirstOrDefault();
        }

        private static int GetTallerDB(string taller)
        {

            return _context.TallerAlumno.Where(x => x.Descripcion == taller).Select(x => x.Id).FirstOrDefault();

        }

        private static string GetReportes(int? reportes)
        {
            return _context.Reportes.Find(reportes).TipoDeReporte;
        }

        private static string GetGrupo(int? grupo)
        {
            return _context.GrupoAlumno.Find(grupo).Descripcion;
        }

        private static string GetStatus(int? status)
        {
            return _context.StatusAlumno.Find(status).Descripcion;
        }

        private static string GetTaller(int? taller)
        {
            return _context.TallerAlumno.Find(taller).Descripcion;
        }
    }
}
