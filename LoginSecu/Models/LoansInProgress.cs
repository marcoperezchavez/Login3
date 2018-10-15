using System;
using System.Collections.Generic;

namespace LoginSecu
{
    public partial class LoansInProgress
    {
        public int LoanNumberId { get; set; }
        public DateTime? ProcessedDate { get; set; }
        public int? Active { get; set; }
        public Guid? BatchId { get; set; }
    }
}
