﻿using System;
using System.Collections.Generic;

namespace LoginSecu
{
    public partial class Reportes
    {
        public Reportes()
        {
            InfoReportes = new HashSet<InfoReportes>();
        }

        public int Id { get; set; }
        public string TipoDeReporte { get; set; }

        public ICollection<InfoReportes> InfoReportes { get; set; }
    }
}
