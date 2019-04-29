from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import rdflib

# detalles de obra
def detalles(request):
    g=rdflib.Graph()
    # lee el archivo rdf
    g.parse("Emancipada_final.rdf")
    # crea diccionario vacio
    data = {}
    # iteracion del rdf mediante consulta sparql
    for row in g.query(
            # obtiene predicado y objeto de la uri de datos de empacipada
            'SELECT ?p ?o where { <http://tarea.com/la_emancipada/resource/LaEmancipada>  ?p  ?o}'):
            #'SELECT ?p ?o where { <http://tarea.com/la_emancipada/resource/MiguelRiofrio>  ?p  ?o}'):
        # agrega datos a diccionario
        data[row.p] = row.o
# retorna json con los datos obtenidos del
    return JsonResponse(data)
    