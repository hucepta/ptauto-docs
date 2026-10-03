using System;
using System.Collections.Generic;
using Autodesk.AutoCAD.ApplicationServices;
using Autodesk.AutoCAD.DatabaseServices;
using Autodesk.AutoCAD.EditorInput;
using Autodesk.AutoCAD.Runtime;
using Autodesk.Civil.ApplicationServices;
using Autodesk.Civil.DatabaseServices;
using AcApp = Autodesk.AutoCAD.ApplicationServices.Core.Application;
using CivilSurface = Autodesk.Civil.DatabaseServices.Surface;

namespace PtautoDocs.CivilExamples
{
    public sealed class CivilInventoryCommands
    {
        [CommandMethod("PTA_CIVIL_INVENTORY", CommandFlags.Modal | CommandFlags.NoUndoMarker)]
        public static void InventoryCurrentDrawing()
        {
            Document doc = AcApp.DocumentManager.MdiActiveDocument;
            if (doc == null) return;
            Editor editor = doc.Editor;

            try
            {
                CivilDocument civil = CivilDocument.GetCivilDocument(doc.Database);
                var rows = new List<string>();
                int alignmentCount = 0;
                int surfaceCount = 0;
                int corridorCount = 0;

                using (Transaction tr = doc.Database.TransactionManager.StartTransaction())
                {
                    foreach (ObjectId id in civil.GetAlignmentIds())
                    {
                        if (!IsUsable(id)) continue;
                        var alignment = tr.GetObject(id, OpenMode.ForRead) as Alignment;
                        if (alignment == null)
                            throw new InvalidOperationException("Collection Alignment chứa kiểu không mong đợi.");
                        rows.Add("Alignment: " + alignment.Name);
                        alignmentCount++;
                    }
                    foreach (ObjectId id in civil.GetSurfaceIds())
                    {
                        if (!IsUsable(id)) continue;
                        var surface = tr.GetObject(id, OpenMode.ForRead) as CivilSurface;
                        if (surface == null)
                            throw new InvalidOperationException("Collection Surface chứa kiểu không mong đợi.");
                        rows.Add("Surface: " + surface.Name + "; kiểu: " + surface.GetType().Name);
                        surfaceCount++;
                    }
                    foreach (ObjectId id in civil.CorridorCollection)
                    {
                        if (!IsUsable(id)) continue;
                        var corridor = tr.GetObject(id, OpenMode.ForRead) as Corridor;
                        if (corridor == null)
                            throw new InvalidOperationException("Collection Corridor chứa kiểu không mong đợi.");
                        rows.Add("Corridor: " + corridor.Name);
                        corridorCount++;
                    }
                }

                editor.WriteMessage("\nBản vẽ: {0}", doc.Name);
                foreach (string row in rows) editor.WriteMessage("\n" + row);
                editor.WriteMessage("\nĐã đọc: {0} Alignment; {1} Surface; {2} Corridor.",
                    alignmentCount, surfaceCount, corridorCount);
                editor.WriteMessage("\nĐây là kiểm kê tên và loại; chưa đánh giá mọi quan hệ thiết kế.");
            }
            catch (System.Exception ex)
            {
                editor.WriteMessage("\nKhông hoàn tất kiểm kê Civil ({0}): {1}",
                    ex.GetType().Name, ex.Message);
            }
        }

        private static bool IsUsable(ObjectId id)
        {
            return !id.IsNull && id.IsValid && !id.IsErased;
        }
    }
}
