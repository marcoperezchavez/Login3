﻿using System;
using System.Collections.Generic;

namespace LoginSecu
{
    public partial class Documentos
    {
        public int Id { get; set; }
        public int TipoDocumentoId { get; set; }
        public string Nombre { get; set; }
        public byte[] FileData { get; set; }
    }
}
