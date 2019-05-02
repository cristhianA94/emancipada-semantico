from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
import rdflib
from rdflib.serializer import Serializer


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
            # Consulta de varios filtros
            'SELECT ?s ?p ?o  WHERE { ?s ?p ?o .FILTER regex(str(?s), "emancipada") .}'):
        # agrega datos a diccionario
        data[row.p] = row.o
# retorna json con los datos obtenidos del
    return JsonResponse(data)
    
def buscador(request):
    #recibe el request del cliente
    if request.method == 'GET':
        g=rdflib.Graph()
        g.parse("Emancipada_final.rdf")
        data = {}
        # asigna en una varible de la palabra del buscador reflejada en el request
        palabra = request.GET['palabra']
        #consutal sparqul con filtro del text del buscador
        query =  'SELECT ?s ?p ?o  WHERE { ?s ?p ?o .FILTER regex(str(?s), "%s") .}'%(palabra)
        for row in g.query(query):
            #separa las uris con / y las guarda en una variable cada parte de la tripleta
            #sujeto = row.s.split("/")
            predicado = row.p.split("/")
            objeto = row.o.split("/")
            data[predicado[-1]] = objeto[-1]
        return JsonResponse(data)
