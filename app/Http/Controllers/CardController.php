<?php

namespace App\Http\Controllers;

use App\Http\Requests\CardRequest;
use App\Http\Resources\CardResourse;
use App\Models\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return CardResourse::collection(Card::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CardRequest $request)
    {
        $data = $request->validated();

        $card = Card::query()->firstOrCreate([
            'title' => $data['title']
        ], $data);

        return CardResourse::make($card);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Card $card)
    {
        $card->delete();

        return [];
    }
}
