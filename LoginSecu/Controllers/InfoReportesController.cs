﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LoginSecu.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LoginSecu.Controllers
{
    [Route("api/[controller]")]
    public class InfoReportesController : Controller
    {
        // GET: api/InfoReportes
        [HttpGet]
        public IEnumerable<InfoReportesGnl> GetInfoReportes()
        {
            var reportsList = Methods.Helpers.GetReportesList();
            return reportsList;
        }

        // GET: api/InfoReportes/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var reporte = Methods.Helpers.GetReporteId(id);
            if (reporte is null)
                return NotFound();
            return Ok(reporte);
        }

        // PUT: api/InfoReportes/5
        [HttpPut("{id}")]
        public IActionResult Put(InfoReportes infoReportes)
        {
            return null;
        }

        // POST: api/InfoReportes
        [HttpPost]
        public IActionResult Post([FromBody] InfoReportesGnl infoReportes)
        {
            var isSave = Methods.Helpers.SaveReport(infoReportes);
            if (isSave)
                return Ok();
            return BadRequest();
        }

        // DELETE: api/InfoReportes/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var isDeleted = Methods.Helpers.DeleteReportId(id);
            if (isDeleted)
                return Ok();
            return BadRequest();
        }

        private bool InfoReportesExists(int id)
        {
            return true;
        }
    }
}
